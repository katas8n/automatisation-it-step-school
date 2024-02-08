package com.example;

import java.util.concurrent.TimeUnit;

import org.junit.Before;
import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import io.github.bonigarcia.wdm.WebDriverManager;

public class AppTest 
{
    private WebDriver driver;

    @Before
    public void installDriver() {
            WebDriverManager.chromedriver().setup();
            driver = new ChromeDriver();
    }

    @Test 
    public void goToGoogle() {
        try {
            driver.get("https://youtube.com.ua");

            WebElement button = driver.findElement(By.xpath("//button[@aria-label='Accept the use of cookies and other data for the purposes described']"));
            button.click();
            System.out.println(button);

            Thread.sleep(1000);

            
            WebElement searchPanel = driver.findElement(By.xpath("//input[@aria-label='Search']"));
            searchPanel.sendKeys("How to eat tea via fork?");

            Thread.sleep(1000);
            
            WebElement searchBtn = driver.findElement(By.xpath("//button[@id='search-icon-legacy']"));
            searchBtn.click();

            // sendkeys 
            // click

        } catch (InterruptedException e) {
            e.printStackTrace();
        } finally {
            driver.quit();
        }

    }

    
}
